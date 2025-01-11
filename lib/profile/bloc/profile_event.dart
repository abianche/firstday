part of 'profile_bloc.dart';

sealed class ProfileEvent extends Equatable {
  const ProfileEvent();

  @override
  List<Object?> get props => [];
}

class UpdateProfile extends ProfileEvent {
  final String? name;
  final String? email;
  final String? bio;

  const UpdateProfile({this.name, this.email, this.bio});

  @override
  List<Object?> get props => [name, email, bio];
}
