import {
  Avatar,
  AvatarGroup,
  ImageList,
  ImageListItem,
  Typography,
} from '@mui/material';
import Box from '@mui/material/Box';
import UserList from './UserLists';

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
];

const RightBar = () => {
  return (
    <Box
      flex={2}
      p={2}
      sx={{
        display: { xs: 'none', sm: 'block' },
      }}
    >
      <Box position="fixed" width={300}>
        <Typography variant="h6" fontWeight={200}>
          Online Friends
        </Typography>
        <AvatarGroup total={26} max={6}>
          <Box width={300} sx={{ display: 'flex' }}>
            <Avatar
              alt="Ajit"
              src={`https://scontent.fzyl2-1.fna.fbcdn.net/v/t39.30808-6/279085380_1130622447484808_3755464654636435569_n.jpg?stp=dst-jpg_p600x600&_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeENfsXBRDtcvytMpHS56PJ3WbeWnXw9rHBZt5adfD2scEdCQifRBv0q-NImkpFuZWP_aC3fM8JJ8CpWaZgC7krZ&_nc_ohc=uyIW05RocDAAX_FnCXw&_nc_ht=scontent.fzyl2-1.fna&oh=00_AT-MdUCOpWvaierTU3dvWtHXt66fuj6L39mVipXVxvg6eQ&oe=628ACBDF`}
            />

            <Avatar
              alt="Remy Sharp"
              src={`https://scontent.fzyl2-1.fna.fbcdn.net/v/t39.30808-1/269265742_1333222197106249_468571364021957352_n.jpg?stp=c0.11.320.320a_dst-jpg_p320x320&_nc_cat=103&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeEOrE7U1qcRrLlDFhuO5Ord4_sPbrKdju_j-w9usp2O7xH-cQYv4lXYgnk3mcLaj1Tt-6Ew81ZatoqhlvDCylg_&_nc_ohc=lcNIGeztChMAX-eMoIM&_nc_ht=scontent.fzyl2-1.fna&oh=00_AT_7LDzPOn6MbGKdCDE7_PpFNZxf5iJSIwCJE8eiUEsd_Q&oe=628C0C5B`}
            />
            <Avatar
              alt="Remy Sharp"
              src={`https://scontent.fzyl2-1.fna.fbcdn.net/v/t39.30808-6/273572833_1425164097940231_3700285366512411351_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGN0ceSV1mSdxgFn0JSYjjwo4nzhgyYA0qjifOGDJgDSvu8cbIEj3jlHaVQAnqaQ5fTskJ44CmXKVkTw5i7qGBm&_nc_ohc=1psSKQ0Auz4AX8fS-CN&_nc_ht=scontent.fzyl2-1.fna&oh=00_AT95lYLqf4M1IUo-lkb34LmghMNbp-V81Sfvg6qKW5PYNA&oe=628ACC93`}
            />
            <Avatar
              alt="Remy Sharp"
              src={`https://scontent.fzyl2-1.fna.fbcdn.net/v/t39.30808-6/274026779_111988001408500_8450973912188649993_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEoZJl-p-e-FHszxY346-81sXzE-SInmP2xfMT5IieY_XHc8Ukul5l-vvRskZX2nOOJRy04Rh5wo-F69CZdrMbU&_nc_ohc=b7VhN5zjbb8AX_24paR&_nc_ht=scontent.fzyl2-1.fna&oh=00_AT-4P1vliIF4jz8ASzBIU6BH8C5DUYzC3leoTQ7fUyiRaw&oe=628B103D`}
            />
            <Avatar
              alt="Remy Sharp"
              src={`https://images.pexels.com/photos/5701925/pexels-photo-5701925.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`}
            />
            <Avatar
              alt="Remy Sharp"
              src={`https://images.pexels.com/photos/1670977/pexels-photo-1670977.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260`}
            />
            <Avatar
              alt="Remy Sharp"
              src={`https://images.pexels.com/photos/12053376/pexels-photo-12053376.jpeg?w=4&h=4&fit=crop`}
            />
          </Box>
        </AvatarGroup>
        <Typography
          variant="h6"
          fontWeight={200}
          marginTop={2}
          marginBottom={1}
        >
          Latest Photos
        </Typography>
        <ImageList
          sx={{ width: 350 }}
          cols={3}
          rowHeight={100}
          gap={5}
        >
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
        <Typography variant="h6" fontWeight={200} mt={1}>
          Latest conversation
        </Typography>
        <UserList />
      </Box>
    </Box>
  );
};

export default RightBar;
