import gql from "graphql-tag";
export default gql`
  mutation AddLyric($content: String, $songID: ID) {
    addLyricToSong(content: $content, songId: $songID) {
      id
      lyrics {
        content
        likes
      }
    }
  }
`;
