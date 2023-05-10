from app.person.person_service import PersonService


personService = PersonService()


class PersonController():
    def new_person(self, data, picture):
        return

    # find person from database
    def find_person(self, picture):
        try:
            result = personService.find_person(picture)

            return result
        except Exception as e:
            print(e)
            raise Exception('bad request: 400')
