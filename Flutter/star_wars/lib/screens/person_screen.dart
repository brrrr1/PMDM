import 'package:flutter/material.dart';
import 'package:star_wars/models/people_list_response/People.dart';

class PersonScreen extends StatefulWidget {
  final People peopleItem;
  PersonScreen({super.key, required this.peopleItem});

  @override
  State<PersonScreen> createState() => _PersonScreenState();
}

class _PersonScreenState extends State<PersonScreen> {
  int _selectedIndex = 0;

  void _onItemTapped(int index) {
    setState(() {
      _selectedIndex = index;
    });
  }

  @override
  Widget build(BuildContext context) {
    final person = widget.peopleItem;
    return Scaffold(
      body: SingleChildScrollView(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Image.network(
              'https://starwars-visualguide.com/assets/img/characters/${person.url!.split('/').where((element) => element.isNotEmpty).last}.jpg',
              fit: BoxFit.cover,
              width: double.infinity,
            ),
            Padding(
              padding: const EdgeInsets.all(8.0),
              child: Text(
                person.name!,
                style: const TextStyle(
                  fontSize: 24,
                  fontWeight: FontWeight.bold,
                ),
              ),
            ),
            Padding(
              padding: const EdgeInsets.all(8.0),
              child: Wrap(
                spacing: 8.0,
                runSpacing: 4.0,
                children: [
                  Chip(label: Text('Height: ${person.height}')),
                  Chip(label: Text('Mass: ${person.mass}')),
                  Chip(label: Text('Hair Color: ${person.hairColor}')),
                  Chip(label: Text('Skin Color: ${person.skinColor}')),
                  Chip(label: Text('Eye Color: ${person.eyeColor}')),
                  Chip(label: Text('Birth Year: ${person.birthYear}')),
                  Chip(label: Text('Gender: ${person.gender}')),
                ],
              ),
            ),
          ],
        ),
      ),
      bottomNavigationBar: BottomNavigationBar(
        items: const <BottomNavigationBarItem>[
          BottomNavigationBarItem(
            icon: Icon(Icons.home, color: Colors.black),
            label: 'Inicio',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.search, color: Colors.black),
            label: 'Buscar',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.favorite, color: Colors.black),
            label: 'Favoritos',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.person, color: Colors.black),
            label: 'Perfil',
          ),
        ],
        currentIndex: _selectedIndex,
        selectedItemColor: Colors.blue,
        onTap: _onItemTapped,
      ),
    );
  }
}