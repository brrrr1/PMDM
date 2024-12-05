import 'package:flutter/material.dart';

class LoginPage extends StatelessWidget {
  const LoginPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        body: Container(
      color: const Color(0xFFE62F16),
      child: SizedBox(
        width: double.infinity,
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            const Image(
              image: NetworkImage(
                  'https://lh3.googleusercontent.com/drive-storage/AJQWtBMYJf1DmmS0B2I_N1AdGsqcSJldgGTyYMItBOA6dnLhlzs77s_1kfLyoFhdReW15r1h6LgwUQBv-YCOrO8k73qZOjylP5PLQyFYoSUj4EIpi5A=w1903-h919'),
              width: 210, 
              height: 210, 
            ),
            const Text(
              "Beautiful, Private Sharing",
              style: TextStyle(
                color: Color(0xFFFC9A81),
                fontSize: 16, 
              ),
            ),
            const Divider(
              height: 170,
              color: Color(0xFFE62F16), 
            ),
            Container(
              margin: const EdgeInsets.only(bottom: 50),
              child: Column(
                children: [
                  ElevatedButton(
                    onPressed: () {},
                    style: ElevatedButton.styleFrom(
                      minimumSize: const Size(250, 50), 
                      backgroundColor: Colors.white, 
                    ),
                    child: const Text(
                      'Sign Up',
                      style: TextStyle(
                        color: Color(0xFFE62F16), 
                      ),
                    ),
                  ),
                  const Divider(
                    height: 15,
                    color: Color(0xFFE62F16), 
                  ),
                  const Text(
                    "Already have a Path account?",
                    style: TextStyle(color: Color(0xFFFC9A81), fontSize: 17),
                  ),
                  const Divider(
                    height: 5,
                    color: Color(0xFFE62F16), 
                  ),
                  ElevatedButton(
                    onPressed: () {},
                    style: ElevatedButton.styleFrom(
                      minimumSize: const Size(250, 50), 
                      backgroundColor: const Color(0xFFE62F16),
                      side: const BorderSide(color: Colors.white),
                    ),
                    child: const Text(
                      'Login',
                      style: TextStyle(
                        color: Colors.white,
                      ),
                    ),
                  ),
                  const Divider(
                    height: 30,
                    color: Color(0xFFE62F16), 
                  ),
                  SizedBox(
                    width: 300, 
                    child: RichText(
                      text: const TextSpan(
                        text: "By using Path, you agree to Path's ",
                        style: TextStyle(
                          color: Color(0xFFFC9A81),
                          fontSize: 17,
                        ),
                        children: <TextSpan>[
                          TextSpan(
                            text: 'Terms of Use',
                            style: TextStyle(
                              color: Colors.white,
                              decoration: TextDecoration.underline,
                            ),
                          ),
                          TextSpan(
                            text: ' and ',
                            style: TextStyle(
                              color: Color(0xFFFC9A81),
                              fontSize: 17,
                            ),
                          ),
                          TextSpan(
                            text: 'Privacy Policy',
                            style: TextStyle(
                              color: Colors.white,
                              decoration: TextDecoration.underline,
                            ),
                          ),
                        ],
                      ),
                      textAlign: TextAlign.center,
                    ),
                  )
                ],
              ),
            )
          ],
        ),
      ),
    ));
  }
}
