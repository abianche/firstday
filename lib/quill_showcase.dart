import 'package:flutter/widgets.dart';
import 'package:flutter_quill/flutter_quill.dart';

class QuillShowcase extends StatefulWidget {
  const QuillShowcase({super.key});

  @override
  State<QuillShowcase> createState() => _QuillShowcaseState();
}

class _QuillShowcaseState extends State<QuillShowcase> {
  final QuillController _controller = QuillController.basic();

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        QuillSimpleToolbar(
          controller: _controller,
          configurations: const QuillSimpleToolbarConfigurations(),
        ),
        Expanded(
          child: QuillEditor.basic(
            controller: _controller,
            configurations: const QuillEditorConfigurations(),
          ),
        )
      ],
    );
  }
}
