/* eslint-disable @next/next/no-img-element */
import classes from "./Loading.module.scss";

export function Loading() {
  return (
    <div className={classes.loading}>
      <img
        width={64}
        height={64}
        className={classes.loading__img}
        src="https://liveblocks.io/loading.svg"
        alt="Loading"
      />
    </div>
  );
}
