import { Box } from '@mui/system';
import Post from './Post';
import postData from '../data/postData';

const Feed = () => {
  return (
    <Box flex={4} p={2}>
      {postData.map((curElem, idx) => (
        <Post
          img={curElem.img}
          name={curElem.name}
          date={curElem.upload}
          key={idx}
        />
      ))}
    </Box>
  );
};

export default Feed;
