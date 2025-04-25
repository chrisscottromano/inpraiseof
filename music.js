// wrap post description (within "") in p tag, use <\/p>\r\n<p>\r\n to line break

const posts = [
  {
    id: 1,
    title: "'Fantôme' by Sasha Berliner",
    date: "01 May 2025",
    description: "<p>Sasha Berliner’s vibraphone is front and center on her “Fantôme” (Outside In, out now). Her command of her instrument enables her to move from delicacy to declaration, sometimes in the space of a phrase, and always with rounded tones and rhythmic dexterity. At age 26, she, like Mr. O’Farrill, is more interested in digging into an emotion or a groove than in honoring any one style. She has a knack for tracing jazz’s past without being reverent. On her previous album, “Onyx,” the well-worn ballad “My Funny Valentine” inspired two tracks—a solo vibraphone meditation on the melody, and a swinging quartet piece based on its bridge.</p><p>Here, Ms. Berliner opens with another oft-played song, Billy Strayhorn’s “U.M.M.G. (Upper Manhattan Medical Group).” Her quartet, including pianist Taylor Eigsti, bassist Harish Raghavan and drummer Jongkuk Kim, sets it at a brisk pace, adding fresh hues to the tune’s already distinctive harmonies. Her playing here is precise and direct as she stretches out some phrases and condenses others, expressing propulsion more than speed while subtly reshaping the song’s form. On “The Worst Person in the World,” a slowly unfolding original ballad with a yearning melody, her tones are soft, her manner patient, and her phrases interlaced with those of Lex Korten’s Fender Rhodes electric piano and David Adewumi’s flugelhorn.</p><p>There and elsewhere, Ms. Berliner establishes moods through instrumental textures. On “Khan Younis,” piano, synthesizer and vibraphone combine to buoyant effect. On “Construction,” her vibraphone and Mr. Eigsti’s piano alternate foreground and background, creating a depth of field. At the end of “Private Investigation,” vibraphone, bass and drums tumble elegantly together through tricky rhythms, finding not so much a closing resolution but rather a satisfying point of arrival.</p><p>Sasha Berliner’s vibraphone is front and center on her “Fantôme” (Outside In, out now). Her command of her instrument enables her to move from delicacy to declaration, sometimes in the space of a phrase, and always with rounded tones and rhythmic dexterity. At age 26, she, like Mr. O’Farrill, is more interested in digging into an emotion or a groove than in honoring any one style. She has a knack for tracing jazz’s past without being reverent. On her previous album, “Onyx,” the well-worn ballad “My Funny Valentine” inspired two tracks—a solo vibraphone meditation on the melody, and a swinging quartet piece based on its bridge.</p><p>Here, Ms. Berliner opens with another oft-played song, Billy Strayhorn’s “U.M.M.G. (Upper Manhattan Medical Group).” Her quartet, including pianist Taylor Eigsti, bassist Harish Raghavan and drummer Jongkuk Kim, sets it at a brisk pace, adding fresh hues to the tune’s already distinctive harmonies. Her playing here is precise and direct as she stretches out some phrases and condenses others, expressing propulsion more than speed while subtly reshaping the song’s form. On “The Worst Person in the World,” a slowly unfolding original ballad with a yearning melody, her tones are soft, her manner patient, and her phrases interlaced with those of Lex Korten’s Fender Rhodes electric piano and David Adewumi’s flugelhorn.</p><p>There and elsewhere, Ms. Berliner establishes moods through instrumental textures. On “Khan Younis,” piano, synthesizer and vibraphone combine to buoyant effect. On “Construction,” her vibraphone and Mr. Eigsti’s piano alternate foreground and background, creating a depth of field. At the end of “Private Investigation,” vibraphone, bass and drums tumble elegantly together through tricky rhythms, finding not so much a closing resolution but rather a satisfying point of arrival.</p>",
    image: "./img/sashaberliner.png",
    clip_path: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)"
  },

  {
    id: 2,
    title: "'That's The Way of the World' by Earth, Wind & Fire",
    date: "04 April 2017",
    description: "<p>Bespoke distillery lomo, activated charcoal sustainable pork belly art party scenester locavore. Literally typewriter asymmetrical, pork belly locavore helvetica scenester meditation squid before they sold out. Mustache celiac bespoke freegan, butcher polaroid vaporware la croix hot chicken sartorial pitchfork PBR&B. Fingerstache fashion axe polaroid, schlitz kitsch banh mi tote bag coloring book meh iPhone williamsburg squid locavore. Leggings subway tile cliche craft beer beard, cornhole lyft thundercats disrupt twee dreamcatcher sriracha chia. Williamsburg humblebrag meditation ethical disrupt authentic. YOLO sartorial subway tile squid.<\/p>\r\n<p>\r\nAffogato coloring book live-edge banjo letterpress brunch, chicharrones wayfarers chia asymmetrical. Gluten-free hella poutine taxidermy, put a bird on it next level twee food truck williamsburg crucifix retro chillwave humblebrag selvage subway tile. Vape trust fund fam venmo. YOLO typewriter mlkshk, leggings ennui mustache gochujang disrupt tousled. Crucifix fam lyft meggings. Austin scenester fam, iceland hammock hoodie kitsch tacos. Ramps activated charcoal tumeric, copper mug try-hard kickstarter la croix pop-up.\r\n<\/p>\r\n<p>\r\nPBR&B brunch iPhone whatever irony, cronut poke heirloom. Man bun leggings green juice quinoa glossier listicle activated charcoal, you probably haven't heard of them coloring book. Try-hard meggings raclette bitters fanny pack, literally lomo single-origin coffee +1 vice. Photo booth unicorn flannel umami, church-key whatever swag aesthetic cliche bushwick mixtape literally you probably haven't heard of them snackwave edison bulb. Ugh iceland jean shorts chia mixtape vexillologist. Mlkshk polaroid quinoa four dollar toast, gastropub succulents vape you probably haven't heard of them viral artisan butcher. Post-ironic put a bird on it organic microdosing, meh craft beer raclette.<\/p>",
    image: "./img/ewaf.png",
    clip_path: "polygon(31% 23%, 90% 30%, 50% 100%, 0% 50%)"
  },

  {
    id: 3,
    title: "‘Portrait Now’ by Sheila Jordan",
    date: "22 March 2017",
    description: "<p>Bespoke distillery lomo, activated charcoal sustainable pork belly art party scenester locavore. Literally typewriter asymmetrical, pork belly locavore helvetica scenester meditation squid before they sold out. Mustache celiac bespoke freegan, butcher polaroid vaporware la croix hot chicken sartorial pitchfork PBR&B. Fingerstache fashion axe polaroid, schlitz kitsch banh mi tote bag coloring book meh iPhone williamsburg squid locavore. Leggings subway tile cliche craft beer beard, cornhole lyft thundercats disrupt twee dreamcatcher sriracha chia. Williamsburg humblebrag meditation ethical disrupt authentic. YOLO sartorial subway tile squid.<\/p>\r\n<p>\r\nAffogato coloring book live-edge banjo letterpress brunch, chicharrones wayfarers chia asymmetrical. Gluten-free hella poutine taxidermy, put a bird on it next level twee food truck williamsburg crucifix retro chillwave humblebrag selvage subway tile. Vape trust fund fam venmo. YOLO typewriter mlkshk, leggings ennui mustache gochujang disrupt tousled. Crucifix fam lyft meggings. Austin scenester fam, iceland hammock hoodie kitsch tacos. Ramps activated charcoal tumeric, copper mug try-hard kickstarter la croix pop-up.\r\n<\/p>\r\n<p>\r\nPBR&B brunch iPhone whatever irony, cronut poke heirloom. Man bun leggings green juice quinoa glossier listicle activated charcoal, you probably haven't heard of them coloring book. Try-hard meggings raclette bitters fanny pack, literally lomo single-origin coffee +1 vice. Photo booth unicorn flannel umami, church-key whatever swag aesthetic cliche bushwick mixtape literally you probably haven't heard of them snackwave edison bulb. Ugh iceland jean shorts chia mixtape vexillologist. Mlkshk polaroid quinoa four dollar toast, gastropub succulents vape you probably haven't heard of them viral artisan butcher. Post-ironic put a bird on it organic microdosing, meh craft beer raclette.<\/p>",
    image: "./img/sj.jpg",
    clip_path: "polygon(0 29%, 100% 0, 100% 70%, 48% 100%)"
  },

  {
    id: 4,
    title: "Try-hard meggings raclette bitters",
    date: "12 February 2017",
    description: "<p>Bespoke distillery lomo, activated charcoal sustainable pork belly art party scenester locavore. Literally typewriter asymmetrical, pork belly locavore helvetica scenester meditation squid before they sold out. Mustache celiac bespoke freegan, butcher polaroid vaporware la croix hot chicken sartorial pitchfork PBR&B. Fingerstache fashion axe polaroid, schlitz kitsch banh mi tote bag coloring book meh iPhone williamsburg squid locavore. Leggings subway tile cliche craft beer beard, cornhole lyft thundercats disrupt twee dreamcatcher sriracha chia. Williamsburg humblebrag meditation ethical disrupt authentic. YOLO sartorial subway tile squid.<\/p>\r\n<p>\r\nAffogato coloring book live-edge banjo letterpress brunch, chicharrones wayfarers chia asymmetrical. Gluten-free hella poutine taxidermy, put a bird on it next level twee food truck williamsburg crucifix retro chillwave humblebrag selvage subway tile. Vape trust fund fam venmo. YOLO typewriter mlkshk, leggings ennui mustache gochujang disrupt tousled. Crucifix fam lyft meggings. Austin scenester fam, iceland hammock hoodie kitsch tacos. Ramps activated charcoal tumeric, copper mug try-hard kickstarter la croix pop-up.\r\n<\/p>\r\n<p>\r\nPBR&B brunch iPhone whatever irony, cronut poke heirloom. Man bun leggings green juice quinoa glossier listicle activated charcoal, you probably haven't heard of them coloring book. Try-hard meggings raclette bitters fanny pack, literally lomo single-origin coffee +1 vice. Photo booth unicorn flannel umami, church-key whatever swag aesthetic cliche bushwick mixtape literally you probably haven't heard of them snackwave edison bulb. Ugh iceland jean shorts chia mixtape vexillologist. Mlkshk polaroid quinoa four dollar toast, gastropub succulents vape you probably haven't heard of them viral artisan butcher. Post-ironic put a bird on it organic microdosing, meh craft beer raclette.<\/p>",
    image: "https://image.ibb.co/cTfZVk/4.jpg",
    clip_path: "polygon(24% 0, 90% 30%, 79% 78%, 13% 76%)"
  },

  {
    id: 5,
    title: "Mustache celiac bespoke freegan",
    date: "25 January 2017",
    description: "<p>Bespoke distillery lomo, activated charcoal sustainable pork belly art party scenester locavore. Literally typewriter asymmetrical, pork belly locavore helvetica scenester meditation squid before they sold out. Mustache celiac bespoke freegan, butcher polaroid vaporware la croix hot chicken sartorial pitchfork PBR&B. Fingerstache fashion axe polaroid, schlitz kitsch banh mi tote bag coloring book meh iPhone williamsburg squid locavore. Leggings subway tile cliche craft beer beard, cornhole lyft thundercats disrupt twee dreamcatcher sriracha chia. Williamsburg humblebrag meditation ethical disrupt authentic. YOLO sartorial subway tile squid.<\/p>\r\n<p>\r\nAffogato coloring book live-edge banjo letterpress brunch, chicharrones wayfarers chia asymmetrical. Gluten-free hella poutine taxidermy, put a bird on it next level twee food truck williamsburg crucifix retro chillwave humblebrag selvage subway tile. Vape trust fund fam venmo. YOLO typewriter mlkshk, leggings ennui mustache gochujang disrupt tousled. Crucifix fam lyft meggings. Austin scenester fam, iceland hammock hoodie kitsch tacos. Ramps activated charcoal tumeric, copper mug try-hard kickstarter la croix pop-up.\r\n<\/p>\r\n<p>\r\nPBR&B brunch iPhone whatever irony, cronut poke heirloom. Man bun leggings green juice quinoa glossier listicle activated charcoal, you probably haven't heard of them coloring book. Try-hard meggings raclette bitters fanny pack, literally lomo single-origin coffee +1 vice. Photo booth unicorn flannel umami, church-key whatever swag aesthetic cliche bushwick mixtape literally you probably haven't heard of them snackwave edison bulb. Ugh iceland jean shorts chia mixtape vexillologist. Mlkshk polaroid quinoa four dollar toast, gastropub succulents vape you probably haven't heard of them viral artisan butcher. Post-ironic put a bird on it organic microdosing, meh craft beer raclette.<\/p>",
    image: "https://image.ibb.co/e12RbQ/5.jpg",
    clip_path: "polygon(0 100%, 46% 0, 100% 70%, 49% 69%)"
  }];



const app = new Vue({
  el: "#app",
  data() {
    return {
      test: "",
      posts: posts,
      selectedClipPath: "polygon(0 100%, 0 0, 100% 0, 100% 100%)",
      postImage: posts[0].image,
      currentPost: null,
      postIndex: 0,
      selected: false,
      ready: false,
      lastSelectedPost: null,
      clipPath: posts[0].clip_path
    };

  },
  methods: {
    changePost(index) {
      if (this.postImage != this.posts[index].image && this.selected == false) {
        this.postImage = this.posts[index].image;
        this.clipPath = this.posts[index].clip_path;
      }
    },
    closePost() {
      if (this.lastSelectedPost != null) {
        this.selected = false;
        this.ready = false;
        this.clipPath = this.posts[this.lastSelectedPost].clip_path;
      }
    },
    selectedPost(index) {
      this.selected = true;
      this.clipPath = this.selectedClipPath;
      this.lastSelectedPost = index;
      this.currentPost = this.posts[index];
      setTimeout(() => {
        this.ready = true;
      }, 600);
    },
    nextPost() {
      if (this.lastSelectedPost < this.posts.length - 1) {
        this.lastSelectedPost++;
        this.ready = false;
        setTimeout(() => {
          this.currentPost = this.posts[this.lastSelectedPost];
          this.postImage = this.currentPost.image;
          this.ready = true;
        }, 600);
      }
    },
    prevPost() {
      if (
        this.lastSelectedPost <= this.posts.length - 1 &&
        this.lastSelectedPost != 0) {
        this.lastSelectedPost--;
        this.ready = false;
        setTimeout(() => {
          this.currentPost = this.posts[this.lastSelectedPost];
          this.postImage = this.currentPost.image;
          this.ready = true;
        }, 600);
      }
    }
  },

  created() {
    window.addEventListener("keydown", e => {
      e.keyCode == 39 ? this.nextPost() : false;
      e.keyCode == 37 ? this.prevPost() : false;
      e.keyCode == 27 ? this.closePost() : false;
    });
  }
});