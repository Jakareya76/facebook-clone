import { useState } from 'react';
import {
  Box,
  Tooltip,
  Fab,
  Modal,
  Typography,
  styled,
  Avatar,
  TextField,
  Stack,
  ButtonGroup,
  Button,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ImageIcon from '@mui/icons-material/Image';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import DateRangeIcon from '@mui/icons-material/DateRange';

const StyledModal = styled(Modal)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const UserBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  marginBottom: '20px',
});

const Add = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Tooltip
        title="Add"
        sx={{
          position: 'fixed',
          bottom: '20px',
          left: { xs: '80%', sm: '30px' },
        }}
      >
        <Fab color="primary" aria-label="add" onClick={handleOpen}>
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Stack
          width={400}
          height={280}
          bgcolor={'background.default'}
          color={'text.primary'}
          p={3}
          borderRadius={3}
        >
          <Typography variant="h6" color="gray" textAlign="center">
            Create Post
          </Typography>
          <UserBox>
            <Avatar
              src={`https://scontent.fzyl2-1.fna.fbcdn.net/v/t39.30808-6/272863160_108040975121571_6886394609703318594_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHJK9UgtwsGbIu8ganPZk4DufvRVQIiCSy5-9FVAiIJLG1elV7s8k7qxUekg1b6rwcMlOOqWoBpMLGHOwVeAT-j&_nc_ohc=lnh6duWse7AAX8JE_Fl&tn=AyRAEQV8y5lZUIzX&_nc_ht=scontent.fzyl2-1.fna&oh=00_AT9abWMjyOMpsq8w7TcYXyXt3MeEJLzAY2KS26stghmIdw&oe=628B2A64`}
            />
            <Typography varint="span" fontWeight={500}>
              Md Jakareya
            </Typography>
          </UserBox>
          <TextField
            id="standard-basic"
            label="Create Post"
            variant="standard"
            sx={{ width: '100%' }}
          />
          <Stack direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotionsIcon color="primary" />
            <ImageIcon color="secondary" />
            <VideoCameraBackIcon color="success" />
            <PersonAddIcon color="error" />
          </Stack>
          <ButtonGroup
            variant="contained"
            aria-label="outlined primary button group"
            fullWidth
          >
            <Button>Post</Button>
            <Button sx={{ width: '50px' }}>
              <DateRangeIcon />
            </Button>
          </ButtonGroup>
        </Stack>
      </StyledModal>
    </>
  );
};

export default Add;
