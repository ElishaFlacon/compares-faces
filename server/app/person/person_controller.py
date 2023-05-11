from app.person.person_service import PersonService


personService = PersonService()


class PersonController():
    def new_person(self, data, picture):
        try:
            packed_data = {
                'picture': picture,
                'name': data.get('name'),
                'age': data.get('age'),
                'gender': data.get('gender'),
                'description': data.get('description'),
            }

            result = personService.new_person(packed_data)

            return result
        except TypeError as e:
            return {'load': False, 'data': None}
        except Exception as e:
            print(e)
            raise Exception('bad request: 400')

    # find person from database
    def find_person(self, picture):
        try:
            result = personService.find_person(picture)

            return result
        except Exception as e:
            print(e)
            raise Exception('bad request: 400')
