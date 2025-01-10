import 'package:equatable/equatable.dart';
import 'package:firstday/models/settings_model.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

part 'settings_event.dart';
part 'settings_state.dart';

class SettingsBloc extends Bloc<SettingsEvent, SettingsState> {
  SettingsBloc()
      : super(
          SettingsState(
            SettingsModel.initialSettings(),
          ),
        ) {
    on<UpdateSettings>((event, emit) {
      emit(
        SettingsState(
          state.settings.copyWith(
            appTheme: event.appTheme,
            enableBetaFeatures: event.enableBetaFeatures,
          ),
        ),
      );
    });
  }
}
