import 'package:firstday/app.dart';
import 'package:firstday/logger.dart';
import 'package:flutter/material.dart';

final logger = getLogger('main');

void main() async {
  WidgetsFlutterBinding.ensureInitialized();

  configureLogger();
  logger.i('App started');

  runApp(const App());
}
