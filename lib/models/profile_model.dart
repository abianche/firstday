import 'package:equatable/equatable.dart';

class ProfileModel extends Equatable {
  final String name;
  final String email;
  final String bio;

  const ProfileModel({
    required this.name,
    required this.email,
    this.bio = '',
  });

  ProfileModel copyWith({
    String? name,
    String? email,
    String? bio,
  }) {
    return ProfileModel(
      name: name ?? this.name,
      email: email ?? this.email,
      bio: bio ?? this.bio,
    );
  }

  @override
  List<Object?> get props => [name, email, bio];

  factory ProfileModel.fromJson(Map<String, dynamic> json) {
    return ProfileModel(
      name: json['name'] as String,
      email: json['email'] as String,
      bio: json['bio'] as String? ?? '',
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'name': name,
      'email': email,
      'bio': bio,
    };
  }
}
