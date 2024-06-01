import { Breadcrumbs, Grid, Link, Stack, Typography } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";
import SearchAppBar from "../../component/Layout/Header";
import GetGoods from "../../hooks/getGoods";
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

const ProductPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = JSON.parse(searchParams.get("id"));
  const { Goods } = GetGoods();
  const myProd = Goods && Goods.find((good) => +good.id === id);

  const leftImages = myProd && myProd.media.slice(0, 3);
  const rightImage = myProd && myProd.media[1];
  const [value, setValue] = React.useState(2);

  return (
    <>
      <SearchAppBar />
      <Grid container spacing={2} pl={3} pt={3}>
        <Grid item xs={12}>
          <Stack spacing={2}>
            <Breadcrumbs>
              <Link underline="hover" color="inherit" href="/">
                Bosh sahifa
              </Link>
              {myProd && (
                <Link underline="hover" color="inherit" href="/material-ui/getting-started/installation/">
                  {myProd.type}
                </Link>
              )}
              {myProd && <Typography>{myProd.title}</Typography>}
            </Breadcrumbs>
          </Stack>
        </Grid>
        {/* Main Content */}
        <Grid item xs={12}>
          <Stack direction="row" spacing={2}>
            {/* Left Side Images */}
            <Stack spacing={2}>
              {leftImages && leftImages.map((image, index) => (
                <img key={index} src={image} alt={myProd && myProd.title} style={{ width: "100px", height: "auto" }} />
              ))}
            </Stack>
            {/* Big Image */}
            {rightImage && (
              <img src={rightImage} alt={myProd && myProd.title} style={{ width: "600px", height: "700px" }} />
            )}
            {myProd && (
              <Stack spacing={3}>
                   <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
  
  <Stack direction="row" alignItems="center" style={{marginLeft: '40px'}}>
                <Rating name="product-rating" value={myProd.rating} precision={0.5} readOnly size="small" />
                <Typography variant="body2" color="textSecondary">
                  {myProd.rating.toFixed(1)} (501 baholar)
                </Typography>
              </Stack>



     
   
    </Box>
                <Typography variant="h4" gutterBottom style={{marginLeft: '40px'}}>
                  {myProd.title}
                </Typography>
                <Typography style={{marginLeft: '40px'}}>
                  Sotuvchi: 
                </Typography>
                <Typography style={{marginLeft: '40px'}}>
                  Yetkazib Berish:
                  <img src="data:image/svg+xml,%3csvg width='14' height='14' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath fill-rule='evenodd' clip-rule='evenodd' d='M7 14C10.866 14 14 10.866 14 7C14 3.13401 10.866 0 7 0C3.13401 0 0 3.13401 0 7C0 10.866 3.13401 14 7 14ZM8.00003 3.5C8.00003 4.05229 7.55231 4.5 7.00003 4.5C6.44774 4.5 6.00003 4.05229 6.00003 3.5C6.00003 2.94772 6.44774 2.5 7.00003 2.5C7.55231 2.5 8.00003 2.94772 8.00003 3.5ZM6.10012 5.79844C5.76875 5.79844 5.50012 6.06707 5.50012 6.39844C5.50012 6.72981 5.76875 6.99844 6.10012 6.99844H6.40008V9.80235H5.60159C5.27022 9.80235 5.00159 10.071 5.00159 10.4023C5.00159 10.7337 5.27022 11.0023 5.60159 11.0023H8.40155C8.73292 11.0023 9.00155 10.7337 9.00155 10.4023C9.00155 10.071 8.73292 9.80235 8.40155 9.80235H7.60008V6.39844C7.60008 6.06707 7.33146 5.79844 7.00008 5.79844H6.10012Z' fill='%23CACBCE'/%3e %3c/svg%3e" alt="icon" style={{ width: '14px', marginLeft: '5px' }} />
                  &nbsp; {/* This is the non-breaking space */}
                </Typography>
              
              </Stack>
            )}
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};

export default ProductPage;
