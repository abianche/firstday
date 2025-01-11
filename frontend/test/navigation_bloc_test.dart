import 'package:bloc_test/bloc_test.dart';
import 'package:firstday/navigation/bloc/navigation_bloc.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  group('NavigationBloc', () {
    test('initial state is NavigationInitial()', () {
      final bloc = NavigationBloc();
      expect(bloc.state, equals(const NavigationInitial()));
    });

    blocTest<NavigationBloc, NavigationState>(
      'emits [NavigationState(screenIndex: 1)] when NavigationIndexChanged(1) is added',
      build: () => NavigationBloc(),
      act: (bloc) => bloc.add(const NavigationIndexChanged(1)),
      expect: () => <NavigationState>[
        const NavigationState(screenIndex: 1),
      ],
    );

    blocTest<NavigationBloc, NavigationState>(
      'emits [NavigationState(screenIndex: 2)] when NavigationIndexChanged(2) is added',
      build: () => NavigationBloc(),
      act: (bloc) => bloc.add(const NavigationIndexChanged(2)),
      expect: () => <NavigationState>[
        const NavigationState(screenIndex: 2),
      ],
    );
  });
}
