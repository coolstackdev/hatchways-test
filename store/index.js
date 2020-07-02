/* eslint-disable curly */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = () => ({
  students: []
})

const mutations = {
  setStudents (state, payload) {
    state.students = payload
  },
  updateStudentTags (state, payload) {
    const newStudents = state.students.map((student) => {
      if (student.id !== payload.id)
        return student
      else {
        const currentTags = student?.tags
        if (currentTags) student.tags = [...student.tags, payload.newTag]
        else student.tags = [payload.newTag]

        return student
      }
    })

    state.students = newStudents
  }
}

export default {
  namespaced: true,
  state,
  mutations
}
