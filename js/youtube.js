// IFrame Player API를 통해 YouTube 동영상을 제어할 수 있다
// Youtube IFrame API를 비동기로 로드합니다.
// 비동기(Asynchronous), 요청한 결과가 동시에 일어나지 않는다

var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// This function creates an <iframe> (and YouTube player)
// after the API code downloads.

function onYouTubeIframeAPIReady() {
  // <div id="player"></div>
  new YT.Player('player', {
    // 최초 재생할 유튜브 영상 ID
    videoId: 'An6LvWQuj_8',
    playerVars: {
      // 자동 재생 유무
      autoplay: true,
      // 반복 재생 유무
      loop: true,
      // 반복 재생할 유튜브 영상 ID 목록
      playlist: 'An6LvWQuj_8'
    },
    events: {
      // 영상이 준비되었을 때 실행
      onReady: function (event) {
        // 음소거
        event.target.mute()
      }
    }
  });
}