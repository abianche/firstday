import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:equatable/equatable.dart';
import 'package:firstday/models/profile_model.dart';

part 'profile_event.dart';
part 'profile_state.dart';

class ProfileBloc extends Bloc<ProfileEvent, ProfileState> {
  ProfileBloc()
      : super(
          ProfileState(
            const ProfileModel(
              name: 'Anonymous',
              email: '',
              bio: '',
            ),
          ),
        ) {
    on<UpdateProfile>((event, emit) {
      emit(
        ProfileState(
          state.profile.copyWith(
            name: event.name,
            email: event.email,
            bio: event.bio,
          ),
        ),
      );
    });
  }
}
