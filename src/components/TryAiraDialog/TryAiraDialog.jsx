// import { ErrorMessage } from "@hookform/error-message";
import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  Card,
  CardContent,
  FormHelperText,
  Grid,
  Stack,
  TextField,
  Typography,
  IconButton,
  Divider,
  Button,
} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Slide from "@mui/material/Slide";
import { MuiTelInput } from "mui-tel-input";
import * as React from "react";
import { Controller, FormProvider, useForm } from "react-hook-form";
import Image from 'next/image'


const TryAiraDialog = (props) => {
  const { open, handleClose } = props;


  return (
    <FormProvider>
      <Dialog
        open={open}
        // TransitionComponent={Transition}
        keepMounted
        fullWidth
        maxWidth="md"
        onClose={handleClose}
        aria-describedby="try-aira"
        PaperProps={{
          style: { borderRadius: "30px" },
        }}
      >
        <DialogContent sx={{ borderRadius: "20px" }}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{ mb: 4 }}
          >
            <Box>
              <Image width={120} height={60} src="/airalogo.svg" alt="AIRA Logo" />
            </Box>
            <Box sx={{ textAlign: "center" }}>
              <Typography variant="body1" sx={{ fontWeight: 700 }}>
                Share your details and we’d get back to you.
              </Typography>
            </Box>
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Stack>

          <Divider sx={{ mb: 1 }} />

          <Grid container spacing={3}>
            <Grid
              item
              xs={12}
              md={6}
              sx={{ zIndex: 2 }}
              alignItems="center"
              justifyContent="center"
            >
              <Card
                raised
                sx={{
                  my: 3,
                  //marginRight: "-100px",
                  zIndex: 2,
                  borderRadius: "25px",
                }}
              >
                <CardContent>
                  <Stack direction="column" gap={2}>
                    <Stack direction="column">
                      <Typography
                        variant="body1"
                        sx={{ fontWeight: 600, color: "#6755DF" }}
                      >
                        Full Name
                      </Typography>
                      {/* <Controller
                        rules={{ required: false }}
                        name="full_name"
                        id="full_name"
                      // control={control}


                      /> */}
                      <TextField
                        sx={{
                          "& fieldset": {
                            //paddingLeft: (theme) => theme.spacing(2.5),
                            borderRadius: "10px",
                          },
                        }}
                        fullWidth
                        autoFocus
                        // value={value}
                        size="small"
                        // onChange={onChange}
                        id="full_name"
                        autoComplete="off"
                        type="text"
                        // size="small"
                        variant="outlined"
                        placeholder="Your name"
                        rows={10}
                      />
                      {/* <ErrorMessage
                        name="full_name"
                        errors={errors}
                        render={({ message }) => <p>{message}</p>}
                      /> */}
                    </Stack>
                    <Stack direction="column">
                      <Typography
                        variant="body1"
                        sx={{ fontWeight: 600, color: "#6755DF" }}
                      >
                        Email
                      </Typography>
                      {/* <FormHelperText
                        htmlFor="email"
                        color="muted"
                        clasSName="mb-1"
                        style={{ fontWeight: "bold" }}
                      >
                        Email
                      </FormHelperText> */}
                      {/* <Controller
                        rules={{ required: true }}
                        name="email"
                        id="email"
                        // control={control} */}
                      {/* render={({ field: { onChange, value } }) => {
                          return ( */}
                      <TextField
                        fullWidth
                        // value={value}
                        size="small"
                        sx={{
                          "& fieldset": {
                            //paddingLeft: (theme) => theme.spacing(2.5),
                            borderRadius: "10px",
                          },
                        }}
                        // onChange={onChange}
                        id="email"
                        autoComplete="off"
                        // size="small"
                        type="email"
                        variant="outlined"
                        placeholder="Email"
                        rows={10}
                      //     />
                      //   );
                      // }}
                      />
                      {/* <ErrorMessage
                        name="email"
                        errors={errors}
                        render={({ message }) => <p>{message}</p>}
                      /> */}
                    </Stack>
                    <Stack direction="column">
                      <Typography
                        variant="body1"
                        sx={{ fontWeight: 600, color: "#6755DF" }}
                      >
                        Contact Number
                      </Typography>
                      {/* <FormHelperText
                        htmlFor="contact_number"
                        color="muted"
                        clasSName="mb-1"
                        style={{ fontWeight: "bold" }}
                      >
                        Contact Number
                      </FormHelperText> */}
                      {/* <Controller
                        rules={{ required: false }}
                        name="contact_number"
                        id="contact_number"
                        // control={control}
                        render={({ field: { onChange, value } }) => {
                          return ( */}
                      <MuiTelInput
                        defaultCountry={"IN"}
                        // value={value}
                        size="small"
                        sx={{
                          "& fieldset": {
                            //paddingLeft: (theme) => theme.spacing(2.5),
                            borderRadius: "10px",
                          },
                        }}
                      // onChange={onChange}
                      // size="small"
                      //     />
                      //   );
                      // }}
                      />
                      {/* <ErrorMessage
                        name="contact_number"
                        errors={errors}
                        render={({ message }) => <p>{message}</p>}
                      /> */}
                    </Stack>

                    <Stack sx={{ my: 1 }}>
                      <Button
                        variant="contained"
                        color="warning"
                        size="large"
                        sx={{ color: "#fff" }}
                        fullWidth
                      // onClick={() => {
                      //   handleSubmit(onSubmit)();
                      // }}
                      >
                        Submit
                      </Button>
                    </Stack>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6} sx={{ zIndex: 1 }}>
              <Image
                src="/images/contact_us.png"
                alt="Try AIRA"
                height="100"
                width="100"
                style={{
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </FormProvider>
  )
}

export default TryAiraDialog