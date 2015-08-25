var app = angular.module('redditClone', []);

app.controller('RedditCloneController', function ($scope) {
  $scope.form = 1;
  $scope.showForm = function () {
    if($scope.form == 1){
      $scope.form = 2
    } else {
      $scope.form = 1
    }
  };
  $scope.upVote = function (votes) {
    $scope.votes += 1
  };
  $scope.submitForm = function (title, author, image, description) {
    $scope.posts.push({
                        title: title,
                        author: author,
                        image: image,
                        description: description,
                        votes: 1,
                        date: new Date,
                        comments: []
                      });
    $scope.title = '';
    $scope.author = '';
    $scope.image = '';
    $scope.description = '';
    $scope.form = 1;
  };
  $scope.posts = [
                  {
                    title: 'Aspen, CO',
                    author: 'Anna Casper',
                    image: 'http://www.aspentimes.com/csp/mediapool/sites/dt.common.streams.StreamServer.cls?STREAMOID=G4ozY9c8$ffKfbszTDHZZs$daE2N3K4ZzOUsqbU5sYv9YMsgLOEcUeu5NB$iPN4iWCsjLu883Ygn4B49Lvm9bPe2QeMKQdVeZmXF$9l$4uCZ8QDXhaHEp3rvzXRJFdy0KqPHLoMevcTLo3h8xh70Y6N_U_CryOsw6FTOdKL_jpQ-&CONTENTTYPE=image/jpeg',
                    description: "Sartorial Truffaut 3 wolf moon synth typewriter deep v gastropub. Before they sold out fixie kogi, pop-up mlkshk tilde polaroid cold-pressed. Try-hard plaid you probably haven't heard of them McSweeney's retro narwhal, cardigan art party Carles gluten-free pop-up whatever PBR&B. Pitchfork VHS mixtape, cold-pressed craft beer hoodie yr four loko irony asymmetrical. Fingerstache heirloom mlkshk, aesthetic stumptown fanny pack occupy lumbersexual ugh 90's drinking vinegar food truck tousled messenger bag Intelligentsia. Bespoke ennui tofu, mumblecore migas four loko VHS Vice Tumblr banh mi literally. Art party meggings semiotics, meh ethical fixie actually quinoa.",
                    votes: 1,
                    date: new Date,
                    comments: []
                  },
                  {
                    title: 'Maroon Bells, CO',
                    author: 'Emily Brown',
                    image: 'https://cdn.photographylife.com/wp-content/uploads/2010/11/Sunrise-at-Maroon-Bells.jpg',
                    description: "Sartorial Truffaut 3 wolf moon synth typewriter deep v gastropub. Before they sold out fixie kogi, pop-up mlkshk tilde polaroid cold-pressed. Try-hard plaid you probably haven't heard of them McSweeney's retro narwhal, cardigan art party Carles gluten-free pop-up whatever PBR&B. Pitchfork VHS mixtape, cold-pressed craft beer hoodie yr four loko irony asymmetrical. Fingerstache heirloom mlkshk, aesthetic stumptown fanny pack occupy lumbersexual ugh 90's drinking vinegar food truck tousled messenger bag Intelligentsia. Bespoke ennui tofu, mumblecore migas four loko VHS Vice Tumblr banh mi literally. Art party meggings semiotics, meh ethical fixie actually quinoa.",
                    votes: -2,
                    date: new Date,
                    comments: []
                  }
                ];
})
