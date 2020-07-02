<template>
  <div class=" relative flex border-b border-gray-200 p-6">
    <div class="w-1/5 pt-3">
      <img :src="student.pic" class="rounded-full border border-gray-400 w-full" alt="avatar">
    </div>
    <div class="w-4/5 ml-6">
      <p class="text-3xl">
        {{ fullName }}
      </p>
      <div class="pl-4 text-gray-700 text-sm">
        <p>Email: {{ student.email }}</p>
        <p>Company: {{ student.company }}</p>
        <p>Skill: {{ student.skill }}</p>
        <p>Average: {{ average }} %</p>
      </div>
      <div v-if="isExpanded" class="mt-3 pl-4 text-gray-700 text-sm">
        <p v-for="(grade, index) in student.grades" :key="index">
          Test {{ index + 1 }}: {{ grade }}%
        </p>
        <div v-if="student.tags" class="flex w-full mt-2">
          <span v-for="(tag, index) in tags" :key="index" class="tag mr-1">
            {{ tag }}
          </span>
        </div>
        <div class="w-1/2 mt-2">
          <Input
            v-model="newTag"
            class-name="add-tag-input"
            placeholder="Add a tag"
            @enterClicked="addTag"
          />
        </div>
      </div>
    </div>
    <span class="absolute top-1 right-0 mr-5 text-3xl text-gray-600 cursor-pointer" @click="toggle">
      {{ expandSymbol }}
    </span>
  </div>
</template>

<script>
import Input from '~/components/atoms/Input'
export default {
  components: {
    Input
  },
  props: {
    student: { type: Object, default: null }
  },
  data: () => ({
    isExpanded: false,
    newTag: '',
    tags: []
  }),
  computed: {
    expandSymbol () {
      return this.isExpanded ? '-' : '+'
    },
    fullName () {
      const fullName = `${this.student.firstName} ${this.student.lastName}`
      return fullName.toUpperCase()
    },
    average () {
      const grades = this.student.grades
      return grades.reduce((a, b) => (parseFloat(a) + parseFloat(b))) / grades.length
    }
  },
  mounted () {
    this.tags = this.student.tags ?? []
  },
  methods: {
    toggle () {
      this.isExpanded = !this.isExpanded
    },
    addTag () {
      this.$store.commit('updateStudentTags', { id: this.student.id, newTag: this.newTag })
      this.tags.push(this.newTag)
      this.newTag = ''
    }
  }
}
</script>
<style scoped>
.tag {
  @apply bg-gray-300 text-gray-700 rounded-md px-3 py-1;
}
</style>
