import 'package:firstday/navigation/bloc/navigation_bloc.dart';
import 'package:firstday/profile/profile_page.dart';
import 'package:firstday/quill_showcase.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:package_info_plus/package_info_plus.dart';

class DestinationPage {
  const DestinationPage(this.label, this.icon, this.selectedIcon);

  final String label;
  final Widget icon;
  final Widget selectedIcon;
}

const List<DestinationPage> destinations = <DestinationPage>[
  DestinationPage(
    'Home',
    Icon(Icons.home_outlined),
    Icon(Icons.home),
  ),
  DestinationPage(
    'Tasks',
    Icon(Icons.task_outlined),
    Icon(Icons.task),
  ),
  DestinationPage(
    'New',
    Icon(Icons.new_label_outlined),
    Icon(Icons.new_label),
  ),
];

const List<DestinationPage> bottomBarDestiantions = <DestinationPage>[
  ...destinations,
  DestinationPage(
    'Profile',
    Icon(Icons.person_outline),
    Icon(Icons.person),
  ),
];

const List<Widget> screens = <Widget>[
  Text('Home'),
  Text('Tasks'),
  QuillShowcase(),
  ProfilePage(),
];

class Navigation extends StatefulWidget {
  const Navigation({super.key});

  @override
  State<Navigation> createState() => _NavigationState();
}

class _NavigationState extends State<Navigation> {
  final GlobalKey<ScaffoldState> scaffoldKey = GlobalKey<ScaffoldState>();

  late bool showNavigationDrawer;

  Widget buildBottomBarScaffold() {
    return BlocBuilder<NavigationBloc, NavigationState>(
      builder: (context, state) {
        return Scaffold(
          body: Center(
            child: Padding(
              padding: const EdgeInsets.all(8.0),
              child: screens[state.screenIndex],
            ),
          ),
          bottomNavigationBar: NavigationBar(
            selectedIndex: state.screenIndex,
            onDestinationSelected: (int index) {
              if (index == bottomBarDestiantions.length - 1) {
                Navigator.of(context).push(
                  MaterialPageRoute(builder: (context) => const ProfilePage()),
                );
                return;
              }
              context.read<NavigationBloc>().add(NavigationIndexChanged(index));
            },
            destinations: bottomBarDestiantions.map(
              (DestinationPage destination) {
                return NavigationDestination(
                  label: destination.label,
                  icon: destination.icon,
                  selectedIcon: destination.selectedIcon,
                  tooltip: destination.label,
                );
              },
            ).toList(),
          ),
        );
      },
    );
  }

  Widget buildDrawerScaffold(BuildContext context) {
    return BlocBuilder<NavigationBloc, NavigationState>(
      builder: (context, state) {
        return Scaffold(
          key: scaffoldKey,
          body: SafeArea(
            bottom: false,
            top: false,
            child: Row(
              children: <Widget>[
                Padding(
                  padding: const EdgeInsets.symmetric(horizontal: 5),
                  child: NavigationRail(
                    minWidth: 50,
                    destinations: destinations.map(
                      (destination) {
                        return NavigationRailDestination(
                          label: Text(destination.label),
                          icon: Tooltip(
                            message: destination.label,
                            waitDuration: Durations.medium2,
                            child: destination.icon,
                          ),
                          selectedIcon: destination.selectedIcon,
                        );
                      },
                    ).toList(),
                    trailing: Expanded(
                      child: Align(
                        alignment: Alignment.bottomLeft,
                        child: Column(
                          mainAxisSize: MainAxisSize.min,
                          children: [
                            Tooltip(
                              message: 'Show Licenses',
                              waitDuration: Durations.medium2,
                              child: IconButton(
                                icon: const Icon(Icons.info),
                                onPressed: () async {
                                  final packageInfo = await PackageInfo.fromPlatform();
                                  if (context.mounted) {
                                    showAboutDialog(
                                      context: context,
                                      applicationIcon: const FlutterLogo(),
                                      applicationName: packageInfo.appName,
                                      applicationVersion: packageInfo.version,
                                      applicationLegalese:
                                          '© ${DateTime.now().year} Alessio Bianchetti\nApache-2.0 license',
                                    );
                                  }
                                },
                              ),
                            ),
                            const SizedBox(height: 16),
                            Tooltip(
                              message: 'Profile',
                              waitDuration: Durations.medium2,
                              child: IconButton(
                                icon: CircleAvatar(
                                  child: const Icon(Icons.person),
                                ),
                                onPressed: () {
                                  Navigator.of(context).push(
                                    MaterialPageRoute(builder: (context) => const ProfilePage()),
                                  );
                                },
                              ),
                            ),
                          ],
                        ),
                      ),
                    ),
                    selectedIndex: state.screenIndex,
                    useIndicator: true,
                    onDestinationSelected: (int index) {
                      context.read<NavigationBloc>().add(NavigationIndexChanged(index));
                    },
                  ),
                ),
                const VerticalDivider(thickness: 1, width: 1),
                Expanded(
                  child: Padding(
                    padding: const EdgeInsets.all(8.0),
                    child: screens[state.screenIndex],
                  ),
                ),
              ],
            ),
          ),
        );
      },
    );
  }

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    showNavigationDrawer = MediaQuery.of(context).size.width >= 450;
  }

  @override
  Widget build(BuildContext context) {
    return showNavigationDrawer ? buildDrawerScaffold(context) : buildBottomBarScaffold();
  }
}
