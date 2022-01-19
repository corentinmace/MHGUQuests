<template>
  <div class="event">
    <div v-for="(quest,id) in quests" :key="id">
        <div v-if="quest.hub == 'Event' && quest.hunter_type == 0">

          <div class="quests" v-if="quest.stars === 1">
              <div class="quest-icon">
                <img v-if="quest.goal_type == 2" src="assets/icon/quest_icon_grey.png">
                <img v-else-if="quest.goal_type == 3" src="assets/icon/quest_icon_green.png">
                <img v-else src="assets/icon/quest_icon_red.png">
              </div>
              <h2>{{ quest.name_fr }}</h2>
              <p>{{ quest.goal_fr }}</p>
              <p class="stars">{{ quest.stars }} ★</p>
              <p v-if="quest.type == 1" class="key"></p>
              <p v-if="quest.type == 2" class="urgent"></p>
          </div>

          
          <div class="quests" v-if="quest.stars === 2">
              <div class="quest-icon">
                <img v-if="quest.goal_type == 2" src="assets/icon/quest_icon_grey.png">
                <img v-else-if="quest.goal_type == 3" src="assets/icon/quest_icon_green.png">
                <img v-else src="assets/icon/quest_icon_red.png">
              </div>
              <h2>{{ quest.name_fr }}</h2>
              <p>{{ quest.goal_fr }}</p>
              <p class="stars">{{ quest.stars }} ★</p>
              <p v-if="quest.type == 1" class="key"></p>
              <p v-if="quest.type == 2" class="urgent"></p>
          </div>

          
          <div class="quests" v-if="quest.stars === 3">
              <div class="quest-icon">
                <img v-if="quest.goal_type == 2" src="assets/icon/quest_icon_grey.png">
                <img v-else-if="quest.goal_type == 3" src="assets/icon/quest_icon_green.png">
                <img v-else src="assets/icon/quest_icon_red.png">
              </div>
              <h2>{{ quest.name_fr }}</h2>
              <p>{{ quest.goal_fr }}</p>
              <p class="stars">{{ quest.stars }} ★</p>
              <p v-if="quest.type == 1" class="key"></p>
              <p v-if="quest.type == 2" class="urgent"></p>
          </div>

          
          <div class="quests" v-if="quest.stars === 4">
              <div class="quest-icon">
                <img v-if="quest.goal_type == 2" src="assets/icon/quest_icon_grey.png">
                <img v-else-if="quest.goal_type == 3" src="assets/icon/quest_icon_green.png">
                <img v-else src="assets/icon/quest_icon_red.png">
              </div>
              <h2>{{ quest.name_fr }}</h2>
              <p>{{ quest.goal_fr }}</p>
              <p class="stars">{{ quest.stars }} ★</p>
              <p v-if="quest.type == 1" class="key"></p>
              <p v-if="quest.type == 2" class="urgent"></p>
          </div>

          
          <div class="quests" v-if="quest.stars === 5">
              <div class="quest-icon">
                <img v-if="quest.goal_type == 2" src="assets/icon/quest_icon_grey.png">
                <img v-else-if="quest.goal_type == 3" src="assets/icon/quest_icon_green.png">
                <img v-else src="assets/icon/quest_icon_red.png">
              </div>
              <h2>{{ quest.name_fr }}</h2>
              <p>{{ quest.goal_fr }}</p>
              <p class="stars">{{ quest.stars }} ★</p>
              <p v-if="quest.type == 1" class="key"></p>
              <p v-if="quest.type == 2" class="urgent"></p>
          </div>

          
          <div class="quests" v-if="quest.stars === 6">
              <div class="quest-icon">
                <img v-if="quest.goal_type == 2" src="assets/icon/quest_icon_grey.png">
                <img v-else-if="quest.goal_type == 3" src="assets/icon/quest_icon_green.png">
                <img v-else src="assets/icon/quest_icon_red.png">
              </div>
              <h2>{{ quest.name_fr }}</h2>
              <p>{{ quest.goal_fr }}</p>
              <p class="stars">{{ quest.stars }} ★</p>
              <p v-if="quest.type == 1" class="key"></p>
              <p v-if="quest.type == 2" class="urgent"></p>
          </div>

          
          <div class="quests" v-if="quest.stars === 7">
              <div class="quest-icon">
                <img v-if="quest.goal_type == 2" src="assets/icon/quest_icon_grey.png">
                <img v-else-if="quest.goal_type == 3" src="assets/icon/quest_icon_green.png">
                <img v-else src="assets/icon/quest_icon_red.png">
              </div>
              <h2>{{ quest.name_fr }}</h2>
              <p>{{ quest.goal_fr }}</p>
              <p class="stars">{{ quest.stars }} ★</p>
              <p v-if="quest.type == 1" class="key"></p>
              <p v-if="quest.type == 2" class="urgent"></p>
          </div>

          
          <div class="quests" v-if="quest.stars === 8">
              <div class="quest-icon">
                <img v-if="quest.goal_type == 2" src="assets/icon/quest_icon_grey.png">
                <img v-else-if="quest.goal_type == 3" src="assets/icon/quest_icon_green.png">
                <img v-else src="assets/icon/quest_icon_red.png">
              </div>
              <h2>{{ quest.name_fr }}</h2>
              <p>{{ quest.goal_fr }}</p>
              <p class="stars">{{ quest.stars }} ★</p>
              <p v-if="quest.type == 1" class="key"></p>
              <p v-if="quest.type == 2" class="urgent"></p>
          </div>

          
          <div class="quests" v-if="quest.stars === 9">
              <div class="quest-icon">
                <img v-if="quest.goal_type == 2" src="assets/icon/quest_icon_grey.png">
                <img v-else-if="quest.goal_type == 3" src="assets/icon/quest_icon_green.png">
                <img v-else src="assets/icon/quest_icon_red.png">
              </div>
              <h2>{{ quest.name_fr }}</h2>
              <p>{{ quest.goal_fr }}</p>
              <p class="stars">{{ quest.stars }} ★</p>
              <p v-if="quest.type == 1" class="key"></p>
              <p v-if="quest.type == 2" class="urgent"></p>
          </div>

          
          <div class="quests" v-if="quest.stars === 10">
              <div class="quest-icon">
                <img v-if="quest.goal_type == 2" src="assets/icon/quest_icon_grey.png">
                <img v-else-if="quest.goal_type == 3" src="assets/icon/quest_icon_green.png">
                <img v-else src="assets/icon/quest_icon_red.png">
              </div>
              <h2>{{ quest.name_fr }}</h2>
              <p>{{ quest.goal_fr }}</p>
              <p class="stars">{{ quest.stars }} ★</p>
              <p v-if="quest.type == 1" class="key"></p>
              <p v-if="quest.type == 2" class="urgent"></p>
          </div>

          
          <div class="quests" v-if="quest.stars === 11">
              <div class="quest-icon">
                <img v-if="quest.goal_type == 2" src="assets/icon/quest_icon_grey.png">
                <img v-else-if="quest.goal_type == 3" src="assets/icon/quest_icon_green.png">
                <img v-else src="assets/icon/quest_icon_red.png">
              </div>
              <h2>{{ quest.name_fr }}</h2>
              <p>{{ quest.goal_fr }}</p>
              <p class="stars">{{ quest.stars }} ★</p>
              <p v-if="quest.type == 1" class="key"></p>
              <p v-if="quest.type == 2" class="urgent"></p>
          </div>

          
          <div class="quests" v-if="quest.stars === 12">
              <div class="quest-icon">
                <img v-if="quest.goal_type == 2" src="assets/icon/quest_icon_grey.png">
                <img v-else-if="quest.goal_type == 3" src="assets/icon/quest_icon_green.png">
                <img v-else src="assets/icon/quest_icon_red.png">
              </div>
              <h2>{{ quest.name_fr }}</h2>
              <p>{{ quest.goal_fr }}</p>
              <p class="stars">{{ quest.stars }} ★</p>
              <p v-if="quest.type == 1" class="key"></p>
              <p v-if="quest.type == 2" class="urgent"></p>
          </div>

          
          <div class="quests" v-if="quest.stars === 13">
              <div class="quest-icon">
                <img v-if="quest.goal_type == 2" src="assets/icon/quest_icon_grey.png">
                <img v-else-if="quest.goal_type == 3" src="assets/icon/quest_icon_green.png">
                <img v-else src="assets/icon/quest_icon_red.png">
              </div>
              <h2>{{ quest.name_fr }}</h2>
              <p>{{ quest.goal_fr }}</p>
              <p class="stars">{{ quest.stars }} ★</p>
              <p v-if="quest.type == 1" class="key"></p>
              <p v-if="quest.type == 2" class="urgent"></p>
          </div>

          
          <div class="quests" v-if="quest.stars === 14">
              <div class="quest-icon">
                <img v-if="quest.goal_type == 2" src="assets/icon/quest_icon_grey.png">
                <img v-else-if="quest.goal_type == 3" src="assets/icon/quest_icon_green.png">
                <img v-else src="assets/icon/quest_icon_red.png">
              </div>
              <h2>{{ quest.name_fr }}</h2>
              <p>{{ quest.goal_fr }}</p>
              <p class="stars">{{ quest.stars }} ★</p>
              <p v-if="quest.type == 1" class="key"></p>
              <p v-if="quest.type == 2" class="urgent"></p>
          </div>

        </div> 
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import axios from 'axios';

export default {
    name: 'Event',
    components: {
      
    },
  setup() {
    const quests = ref([]);

    onMounted(() => {
      axios.get('api/api.json')
      .then(res => {
        console.log(res.data);
        quests.value = res.data
      })
      .catch(err => console.error(err))
    })

    return { quests }
  }
}
</script>