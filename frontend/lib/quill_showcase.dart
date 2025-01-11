import 'package:firstday/logger.dart';
import 'package:flutter/material.dart';
import 'package:flutter_quill/flutter_quill.dart';

final logger = getLogger("quill_showcase");

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
        ),
        IconButton(
          icon: Icon(Icons.save),
          onPressed: () {
            // Retrieve the JSON format of the document
            final json = _controller.document.toDelta().toJson();
            logger.i(json);
          },
        ),
      ],
    );
  }
}
