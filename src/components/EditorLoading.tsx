import { Box, Skeleton } from "@mui/material";

export default function EditorLoading() {
  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        // padding: 10,
        width: "100%",
      }}
    >
      <Skeleton variant="rectangular" width="100%" height={50} />
      <Skeleton variant="rectangular" width="100%" height={250} />
      <Skeleton variant="rectangular" width="100%" height={25} />
    </Box>
  );
}
