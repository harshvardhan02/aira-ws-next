import React from 'react';
import { Grid, Stack, Typography } from "@mui/material";
import Colors from '@/common/Colorscomponents';
import Image from 'next/image'

const PowerOfIntelligence = () => {
  return (
    <Grid container direction="row" spacing={2} sx={{ py: 5 }}>
      <Grid item xs={12} sm={6}>
        <Stack direction="column" gap={2}>
          <Typography variant="h5" sx={{ fontWeight: 700 }}>
            The Power of <br />
            <span style={{ color: Colors.airaSecondary }}>
              Artificial Intelligence (AI)
            </span>{" "}
          </Typography>

          <Stack direction="column" gap={2}>
            <Typography
              variant="body2"
              sx={{ fontWeight: 600, lineHeight: 1.8 }}
            >
              The power of AI lies not in its ability to replace human
              intelligence, but in its potential to augment it, amplifying our
              capacity for creativity, problem-solving, and innovation.
            </Typography>
            <Typography variant="body2" sx={{ lineHeight: 1.8 }}>
              AI has the power to transform industries and change the way we
              live and work. Its ability to analyze vast amounts of data,
              identify patterns, and make predictions can improve
              decision-making, increase efficiency, and drive innovation.
            </Typography>
          </Stack>
        </Stack>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Image
          src="/images/home/powerintelligence.png"
          alt="Power of AI"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
        />
      </Grid>
    </Grid>
  )
}

export default PowerOfIntelligence