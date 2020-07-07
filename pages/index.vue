<template>
  <div class="flex min-h-screen justify-center bg-gray-200 py-10">
    <div class="w-full max-w-xl">
      <div v-if="isLoaded" class="bg-white shadow-md rounded">
        <Input
          v-model="searchByName"
          type="text"
          placeholder="Search by name"
          class="pt-1"
        />
        <Input
          id="tag-input"
          v-model="searchByTag"
          type="text"
          placeholder="Search by tags"
          class="mt-3"
        />
        <Student
          v-for="student in filteredStudents"
          :key="student.id"
          :student="student"
        />
      </div>
      <div v-else>
        Loading...
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Input from '~/components/atoms/Input'
import Student from '~/components/atoms/Student'

export default {
  components: {
    Input,
    Student
  },
  data: () => ({
    isLoaded: false,
    searchByName: '',
    searchByTag: ''
  }),
  computed: {
    ...mapState({
      students: state => state.students
    }),
    filteredStudents () {
      const filteredByName = this.students.filter(student => (student.firstName + student.lastName).toUpperCase().includes(this.searchByName.toUpperCase()))
      const filteredByTags = filteredByName.filter((student) => {
        const strTags = student.tags?.reduce((a, b) => (a + ' ' + b)) ?? ''
        return strTags.includes(this.searchByTag)
      })
      return filteredByTags
    }
  },
  async created () {
    const response = await this.$axios.$get(process.env.API_URL || 'https://www.hatchways.io/api/assessment/students')
    this.$store.commit('setStudents', response.students)
    this.isLoaded = true
  }
}
</script>

<style>

</style>
