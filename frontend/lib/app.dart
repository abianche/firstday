import 'package:firstday/navigation/bloc/navigation_bloc.dart';
import 'package:firstday/drawer.dart';
import 'package:firstday/profile/bloc/profile_bloc.dart';
import 'package:firstday/settings/bloc/settings_bloc.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

class App extends StatelessWidget {
  const App({super.key});

  @override
  Widget build(BuildContext context) {
    return MultiBlocProvider(
      providers: [
        BlocProvider(create: (_) => NavigationBloc()),
        BlocProvider(create: (_) => ProfileBloc()),
        BlocProvider(create: (_) => SettingsBloc()),
      ],
      child: MaterialApp(
        title: 'First Day',
        home: const Navigation(),
      ),
    );
  }
}
