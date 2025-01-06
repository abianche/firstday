import 'package:flutter/material.dart';
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

class Navigation extends StatefulWidget {
  const Navigation({super.key});

  @override
  State<Navigation> createState() => _NavigationState();
}

class _NavigationState extends State<Navigation> {
  final GlobalKey<ScaffoldState> scaffoldKey = GlobalKey<ScaffoldState>();

  int screenIndex = 0;
  late bool showNavigationDrawer;

  Widget buildBottomBarScaffold() {
    return Scaffold(
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
          children: <Widget>[
            Text('Page Index = $screenIndex'),
          ],
        ),
      ),
      bottomNavigationBar: NavigationBar(
        selectedIndex: screenIndex,
        onDestinationSelected: (int index) {
          setState(() {
            screenIndex = index;
          });
        },
        destinations: destinations.map(
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
  }

  Widget buildDrawerScaffold(BuildContext context) {
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
                    child: Padding(
                      padding: const EdgeInsets.only(bottom: 8.0),
                      child: Row(
                        children: [
                          Tooltip(
                            message: 'Show Licenses',
                            waitDuration: Durations.medium2,
                            child: IconButton(
                              icon: const Icon(Icons.info),
                              onPressed: () async {
                                final packageInfo = await PackageInfo.fromPlatform();
                                if (mounted) {
                                  showAboutDialog(
                                    // ignore: use_build_context_synchronously
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
                        ],
                      ),
                    ),
                  ),
                ),
                selectedIndex: screenIndex,
                useIndicator: true,
                onDestinationSelected: (int index) {
                  setState(() {
                    screenIndex = index;
                  });
                },
              ),
            ),
            const VerticalDivider(thickness: 1, width: 1),
            Expanded(
              child: Column(
                mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                children: <Widget>[
                  Text('Page Index = $screenIndex'),
                ],
              ),
            ),
          ],
        ),
      ),
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
