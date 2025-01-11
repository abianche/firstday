import 'package:firstday/profile/bloc/profile_bloc.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

class ProfileView extends StatelessWidget {
  const ProfileView({super.key});

  @override
  Widget build(BuildContext context) {
    return BlocBuilder<ProfileBloc, ProfileState>(
      builder: (context, state) {
        final profile = state.profile;

        return Padding(
          padding: const EdgeInsets.all(16.0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              TextFormField(
                initialValue: profile.name,
                decoration: const InputDecoration(labelText: 'Name'),
                onChanged: (value) {
                  context.read<ProfileBloc>().add(UpdateProfile(name: value));
                },
              ),
              const SizedBox(height: 16),
              TextFormField(
                initialValue: profile.email,
                decoration: const InputDecoration(labelText: 'Email'),
                onChanged: (value) {
                  context.read<ProfileBloc>().add(UpdateProfile(email: value));
                },
              ),
              const SizedBox(height: 16),
              TextFormField(
                initialValue: profile.bio,
                decoration: const InputDecoration(labelText: 'Bio'),
                onChanged: (value) {
                  context.read<ProfileBloc>().add(UpdateProfile(bio: value));
                },
                maxLines: 3,
              ),
            ],
          ),
        );
      },
    );
  }
}
