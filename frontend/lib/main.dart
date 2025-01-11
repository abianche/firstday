import 'package:firstday/app.dart';
import 'package:firstday/logger.dart';
import 'package:firstday/simple_bloc_observer.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:hydrated_bloc/hydrated_bloc.dart';
import 'package:path_provider/path_provider.dart';

final logger = getLogger('main');

void main() async {
  WidgetsFlutterBinding.ensureInitialized();

  configureLogger();
  logger.i('App started');

  Bloc.observer = SimpleBlocObserver();

  final storage = await HydratedStorage.build(
    storageDirectory: kIsWeb ? HydratedStorage.webStorageDirectory : await getApplicationDocumentsDirectory(),
  );
  HydratedBloc.storage = storage;

  runApp(const App());
}
