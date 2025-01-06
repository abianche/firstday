import 'package:firstday/app.dart';
import 'package:firstday/logger.dart';
import 'package:firstday/simple_bloc_observer.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

final logger = getLogger('main');

void main() async {
  WidgetsFlutterBinding.ensureInitialized();

  configureLogger();
  logger.i('App started');

  Bloc.observer = SimpleBlocObserver();

  runApp(const App());
}
