part of 'profile_bloc.dart';

class ProfileState extends Equatable {
  final ProfileModel profile;

  const ProfileState(this.profile);

  @override
  List<Object> get props => [profile];
}
