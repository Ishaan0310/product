import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import Avatar from '@mui/material/Avatar';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';

const productImages = [
  './src/assets/download.jpeg', // Replace with actual image paths
  './src/assets/back.jpeg',
];
const useStyles = styled((theme) => ({
    dialogPaper: {
      backgroundColor: 'white',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    blurBackground: {
      filter: 'blur(5px)',
    },
  }));
function ProductDetails() {
  const [mainImage, setMainImage] = useState(productImages[0]);
  const [rating, setRating] = useState(4);
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const author = {
    name: 'Emily Chen',
    image: './src/assets/images.jpeg', // Replace with actual image path
    bio: 'Rhonda Byrne is the creator behind The Secret, a documentary film that swept the world in 2006, changing millions of lives and igniting a global movement around the power of manifestation. The following year Rhondas book of The Secret was released, which was translated into 50 languages and remains one of the longest-running bestsellers of this century. Rhonda has written five more bestselling books since, which together form The Secret Book Series: The Power in 2009, The Magic in 2010, Hero in 2013, How The Secret Changed My Life in 2016, The Greatest Secret in 2020, and her latest book, The Secret to Love, Health, and Money: A Masterclass in 2022.',
    link: 'https://www.rhondabyrne.com/',
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ mt: 2, mb: 4 }}>
      
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Card sx={{ maxWidth: 400, maxHeight: 400, mb: 5 }}>
            <CardMedia
              component="img"
              image={mainImage}
              alt="Product"
              sx={{ width: '100%', height: 'auto' }}
            />
          </Card>
          <Box sx={{ display: 'flex', mt: 2 }}>
            {productImages.map((image, index) => (
              <Box
                key={index}
                sx={{
                  border: mainImage === image ? '2px solid #000' : '1px solid #ccc',
                  p: 1,
                  cursor: 'pointer',
                  mx: 1,
                }}
                onClick={() => setMainImage(image)}
              >
                <img src={image} alt={`Product ${index + 1}`} style={{ width: 50, height: 50 }} />
              </Box>
            ))}
          </Box>
        </Grid>
        <Grid item xs={12} md={5}>
          <Card sx={{ p: 1 }}>
            <CardContent>
              <Typography variant="h5" component="div" sx={{ mb: 4 }}>
                The Secret
              </Typography>
              <Typography variant="body1" component="div" sx={{ mb: 4 }}>
              The Secret is a 2006 self-help book by Rhonda Byrne, based on the earlier film of the same name. It is based on the belief of the pseudoscientific law of attraction, which claims that thought alone can influence objective circumstances within one's life. The book alleges energy as assurance of its effectiveness.
              </Typography>
              <Rating
                name="product-rating"
                value={rating}
                onChange={(event, newValue) => setRating(newValue)}
                sx={{ mb: 2 }}
              />
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Avatar src={author.image} sx={{ width: 50, height: 50, mr: 1 }} />
                <Typography variant="body1" component="div" sx={{ cursor: 'pointer' }} onClick={handleClickOpen}>
                  {author.name}
                </Typography>
              </Box>
              <Typography variant="h6" component="div" sx={{ mt: 2 }}>
                Price: $19.99
              </Typography>
              <Button variant="contained" sx={{ mt: 2 }}>
                Add to Cart
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Dialog
        open={open}
        onClose={handleClose}
        classes={{ paper: classes.dialogPaper }}
        BackdropProps={{ className: classes.blurBackground }}
      >
        <DialogTitle>
  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Avatar src={author.image} sx={{ width: 80, height: 80, mr: 2 }} />
      <Typography variant="h6" component="div">
        {author.name}
      </Typography>
    </Box>
    <IconButton aria-label="close" onClick={handleClose}>
      <CloseIcon />
    </IconButton>
  </Box>
</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {author.bio}
            <br />
            <a href={author.link} target="_blank" rel="noopener noreferrer">
              Visit {author.name}'s website
            </a>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </Box>
  );
}

export default ProductDetails;