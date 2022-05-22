import {
  CardContent,
  Avatar,
  Card,
  CardHeader,
  CardMedia,
  Typography,
  IconButton,
  CardActions,
  Checkbox,
  // Skeleton,
} from '@mui/material';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import MoreVertIcon from '@mui/icons-material/More';
import ShareIcon from '@mui/icons-material/Share';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Post = ({ img, name, date }) => {
  return (
    <Card sx={{ marginBottom: '50px' }}>
      <CardHeader
        avatar={
          <Avatar
            sx={{ bgcolor: 'red' }}
            aria-label="recipe"
            src={img}
          />
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Md Jakareya"
        subheader={date}
      />
      <CardMedia
        component="img"
        height="18%"
        image={img}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun
          meal to cook together with your guests. Add 1 cup of frozen
          peas along with the mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox
            {...label}
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite color="error" />}
          />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Post;
