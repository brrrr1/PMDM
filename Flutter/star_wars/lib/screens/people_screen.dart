import 'package:flutter/material.dart';

import 'package:http/http.dart' as http;
import 'package:star_wars/models/people_list_response/people_list_response.dart';

class PeopleScreen extends StatefulWidget {
  const PeopleScreen({super.key});

  @override
  State<PeopleScreen> createState() => _PeopleScreenState();
}

class _PeopleScreenState extends State<PeopleScreen> {
  late Future<PeopleListResponse> peopleResponse;

  @override
  void initState() {
    super.initState();
    peopleResponse = getPeople();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('People'),
      ),
      body: FutureBuilder<PeopleListResponse>(
        future: peopleResponse,
        builder: (context, snapshot) {
          if (snapshot.hasData) {
            return _buildPeopleImage(
                snapshot.data!); // Cambiado a _buildPeopleImage
          } else if (snapshot.hasError) {
            return Text('${snapshot.error}');
          }

          // By default, show a loading spinner.
          return const Center(child: CircularProgressIndicator());
        },
      ),
    );
  }

  Future<PeopleListResponse> getPeople() async {
    final response = await http.get(Uri.parse('https://swapi.dev/api/people'));

    if (response.statusCode == 200) {
      return PeopleListResponse.fromJson(response.body);
    } else {
      throw Exception('Failed to load album');
    }
  }

  Widget _buildPeopleList(PeopleListResponse peopleResponse) {
    return ListView.builder(
        itemCount: peopleResponse.results!.length,
        itemBuilder: (context, index) {
          return Text(peopleResponse.results![index].name!);
        });
  }

  Widget _buildPeopleImage(PeopleListResponse peopleResponse) {
    return Column(
      children: [
        Expanded(
          child: ListView.builder(
            scrollDirection: Axis.horizontal,
            itemCount: peopleResponse.results!.length,
            itemBuilder: (context, index) {
              final person = peopleResponse.results![index];
              return Card(
                margin:
                    const EdgeInsets.symmetric(horizontal: 15, vertical: 10),
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(15.0),
                ),
                elevation: 5, // Añadir sombra
                child: SizedBox(
                  width: 320, // Ancho ajustado
                  height: 200, // Altura ajustada
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Expanded(
                        child: ClipRRect(
                          borderRadius:
                              BorderRadius.vertical(top: Radius.circular(15.0)),
                          child: Image.network(
                            'https://starwars-visualguide.com/assets/img/characters/${index + 1}.jpg',
                            fit: BoxFit.cover,
                            width: double.infinity,
                          ),
                        ),
                      ),
                      Padding(
                        padding: const EdgeInsets.all(8.0),
                        child: Text(
                          person.name!,
                          style: const TextStyle(
                            fontSize: 18,
                            fontWeight: FontWeight.bold,
                          ),
                        ),
                      ),
                      Padding(
                        padding: const EdgeInsets.symmetric(horizontal: 8.0),
                        child: Text('Height: ${person.height}'),
                      ),
                      Padding(
                        padding: const EdgeInsets.symmetric(horizontal: 8.0),
                        child: Text('Mass: ${person.mass}'),
                      ),
                    ],
                  ),
                ),
              );
            },
          ),
        ),
        SizedBox(
          height: 100, // Altura ajustada
          child: ListView.builder(
            scrollDirection: Axis.horizontal,
            itemCount: peopleResponse.results!.length,
            itemBuilder: (context, index) {
              return Padding(
                padding: const EdgeInsets.all(8.0),
                child: Card(
                  shape: RoundedRectangleBorder(
                    borderRadius:
                        BorderRadius.circular(15.0), // Bordes redondeados
                  ),
                  elevation: 5, // Añadir sombra
                  child: ClipRRect(
                    borderRadius:
                        BorderRadius.circular(15.0), // Bordes redondeados
                    child: Image.network(
                      'https://starwars-visualguide.com/assets/img/characters/${index + 1}.jpg',
                      fit: BoxFit.cover,
                      width: 100, // Ancho ajustado
                      height: 100, // Altura ajustada
                    ),
                  ),
                ),
              );
            },
          ),
        ),
      ],
    );
  }
}
