import 'package:flutter/material.dart';
import 'package:star_wars/models/people_list_response/People.dart';

class PersonScreen extends StatefulWidget {
  final People peopleItem;
  PersonScreen({super.key, required this.peopleItem});

  @override
  State<PersonScreen> createState() => _PersonScreenState();
}

class _PersonScreenState extends State<PersonScreen> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.peopleItem.name!),
      ),
      body: const Center(
        child: CircularProgressIndicator(),
      ),
    );
  }
}