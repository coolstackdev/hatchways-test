import { shallowMount } from '@vue/test-utils'
import Student from './Student.vue'

describe('StudentComponent', () => {
  it('renders fullName correctly', () => {
    const props = {
      city: 'Fushë-Muhurr',
      company: 'Yadel',
      email: 'iorton0@imdb.com',
      firstName: 'Ingaberg',
      grades: ['78', '100', '92', '86', '89', '88', '91', '87'],
      id: '1',
      lastName: 'Orton',
      pic: 'https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/voluptasdictablanditiis.jpg',
      skill: 'Oracle'
    }

    const element = shallowMount(Student, {
      propsData: {
        student: props
      }
    })

    expect(element.find('p.text-3xl').text()).toBe('INGABERG ORTON')
  })
})
