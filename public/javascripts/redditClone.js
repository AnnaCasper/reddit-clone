var app = angular.module('redditClone', ['angularMoment', 'ngAnimate']);

app.controller('RedditCloneController', function ($scope) {
  $scope.showingForm = false;
  $scope.showingComments = false;
  $scope.showingAddComment = false;
  $scope.showingSortOptions = false;
  $scope.q = 'title';
  $scope.w = 'title';
  $scope.showForm = function () {
    $scope.showingForm = !$scope.showingForm;
  };
  $scope.upVote = function (post) {
    post.votes += 1
  };
  $scope.downVote = function (post) {
    post.votes -= 1
  };
  $scope.submitForm = function () {
    $scope.post['votes'] = 0;
    $scope.post['date'] = new Date;
    $scope.post['comments'] = [];
    $scope.posts.push($scope.post);
    $scope.post = {};
    $scope.showForm();
  };
  $scope.showComments = function (){
    $scope.showingAddComment = false;
    this.showingComments = !this.showingComments;
  };
  $scope.showAddComment = function (post) {
    $scope.showingComments = false;
    this.showingAddComment = !this.showingAddComment;
  };
  $scope.showSort = function () {
    $scope.showingSortOptions = !$scope.showingSortOptions
  };
  $scope.sortByDate = function () {
    $scope.q = 'date';
    $scope.w = 'date';
    $scope.showSort()
  };
  $scope.sortByVotes = function () {
    $scope.q = '-votes';
    $scope.w = 'votes';
    $scope.showSort()
  };
  $scope.sortByTitle = function () {
    $scope.q = 'title';
    $scope.w = 'title';
    $scope.showSort()
  };
  $scope.submitComment = function (post, author, message) {
    post.comments.push({author: author,
                        text: message
                      });
    $scope.showingAddComment = false;
  };
  $scope.posts = [
                  {
                    title: 'Aspen, CO',
                    author: 'Anna Casper',
                    image: 'http://www.aspentimes.com/csp/mediapool/sites/dt.common.streams.StreamServer.cls?STREAMOID=G4ozY9c8$ffKfbszTDHZZs$daE2N3K4ZzOUsqbU5sYv9YMsgLOEcUeu5NB$iPN4iWCsjLu883Ygn4B49Lvm9bPe2QeMKQdVeZmXF$9l$4uCZ8QDXhaHEp3rvzXRJFdy0KqPHLoMevcTLo3h8xh70Y6N_U_CryOsw6FTOdKL_jpQ-&CONTENTTYPE=image/jpeg',
                    description: "Sartorial Truffaut 3 wolf moon synth typewriter deep v gastropub. Before they sold out fixie kogi, pop-up mlkshk tilde polaroid cold-pressed. Try-hard plaid you probably haven't heard of them McSweeney's retro narwhal, cardigan art party Carles gluten-free pop-up whatever PBR&B. Pitchfork VHS mixtape, cold-pressed craft beer hoodie yr four loko irony asymmetrical. Fingerstache heirloom mlkshk, aesthetic stumptown fanny pack occupy lumbersexual ugh 90's drinking vinegar food truck tousled messenger bag Intelligentsia. Bespoke ennui tofu, mumblecore migas four loko VHS Vice Tumblr banh mi literally. Art party meggings semiotics, meh ethical fixie actually quinoa.",
                    votes: 0,
                    date: new Date,
                    comments: []
                  },
                  {
                    title: 'Maroon Bells, CO',
                    author: 'Emily Brown',
                    image: 'https://cdn.photographylife.com/wp-content/uploads/2010/11/Sunrise-at-Maroon-Bells.jpg',
                    description: "Sartorial Truffaut 3 wolf moon synth typewriter deep v gastropub. Before they sold out fixie kogi, pop-up mlkshk tilde polaroid cold-pressed. Try-hard plaid you probably haven't heard of them McSweeney's retro narwhal, cardigan art party Carles gluten-free pop-up whatever PBR&B. Pitchfork VHS mixtape, cold-pressed craft beer hoodie yr four loko irony asymmetrical. Fingerstache heirloom mlkshk, aesthetic stumptown fanny pack occupy lumbersexual ugh 90's drinking vinegar food truck tousled messenger bag Intelligentsia. Bespoke ennui tofu, mumblecore migas four loko VHS Vice Tumblr banh mi literally. Art party meggings semiotics, meh ethical fixie actually quinoa.",
                    votes: 0,
                    date: new Date,
                    comments: [
                                {
                                  author: 'Penny',
                                  text: 'This looks fantastic!'
                                }
                              ]
                  },
                  {
                    title: 'Hanging Lake, CO',
                    author: 'Andrea Droz',
                    image: 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Glenwood_Canyon.jpg',
                    description: "Sartorial Truffaut 3 wolf moon synth typewriter deep v gastropub. Before they sold out fixie kogi, pop-up mlkshk tilde polaroid cold-pressed. Try-hard plaid you probably haven't heard of them McSweeney's retro narwhal, cardigan art party Carles gluten-free pop-up whatever PBR&B. Pitchfork VHS mixtape, cold-pressed craft beer hoodie yr four loko irony asymmetrical. Fingerstache heirloom mlkshk, aesthetic stumptown fanny pack occupy lumbersexual ugh 90's drinking vinegar food truck tousled messenger bag Intelligentsia. Bespoke ennui tofu, mumblecore migas four loko VHS Vice Tumblr banh mi literally. Art party meggings semiotics, meh ethical fixie actually quinoa.",
                    votes: 0,
                    date: new Date,
                    comments: [
                                {
                                  author: 'Emily',
                                  text: 'I want to go there!'
                                }
                              ]
                  },
                  {
                    title: 'Strawberry Park Hot Springs, CO',
                    author: 'Laura Fairbanks',
                    image: 'http://www.wickedgoodtraveltips.com/wp-content/uploads/2014/10/strawberry_park_steamboat.jpg',
                    description: "Sartorial Truffaut 3 wolf moon synth typewriter deep v gastropub. Before they sold out fixie kogi, pop-up mlkshk tilde polaroid cold-pressed. Try-hard plaid you probably haven't heard of them McSweeney's retro narwhal, cardigan art party Carles gluten-free pop-up whatever PBR&B. Pitchfork VHS mixtape, cold-pressed craft beer hoodie yr four loko irony asymmetrical. Fingerstache heirloom mlkshk, aesthetic stumptown fanny pack occupy lumbersexual ugh 90's drinking vinegar food truck tousled messenger bag Intelligentsia. Bespoke ennui tofu, mumblecore migas four loko VHS Vice Tumblr banh mi literally. Art party meggings semiotics, meh ethical fixie actually quinoa.",
                    votes: 0,
                    date: new Date,
                    comments: [
                                {
                                  author: 'Drew',
                                  text: 'I want to go there!'
                                }
                              ]
                  },
                  {
                    title: 'Mount Princeton Hot Springs, CO',
                    author: 'Drew Eflin',
                    image: 'http://www.mtprinceton.org/mt-princeton-hot-springs.jpg',
                    description: "Sartorial Truffaut 3 wolf moon synth typewriter deep v gastropub. Before they sold out fixie kogi, pop-up mlkshk tilde polaroid cold-pressed. Try-hard plaid you probably haven't heard of them McSweeney's retro narwhal, cardigan art party Carles gluten-free pop-up whatever PBR&B. Pitchfork VHS mixtape, cold-pressed craft beer hoodie yr four loko irony asymmetrical. Fingerstache heirloom mlkshk, aesthetic stumptown fanny pack occupy lumbersexual ugh 90's drinking vinegar food truck tousled messenger bag Intelligentsia. Bespoke ennui tofu, mumblecore migas four loko VHS Vice Tumblr banh mi literally. Art party meggings semiotics, meh ethical fixie actually quinoa.",
                    votes: 0,
                    date: new Date,
                    comments: []
                  }
                ];
})
