/* eslint-disable @next/next/no-img-element */
import { useOthers, useSelf } from "@/liveblocks.config";

import classes from "./Avatars.module.scss";

export function Avatars() {
  const users = useOthers();
  const currentUser = useSelf();

  return (
    <div className={classes.avatars}>
      {users.map(({ connectionId, info }) => {
        return (
          <Avatar key={connectionId} picture={info.picture} name={info.name} />
        );
      })}

      {currentUser && (
        <div className="relative ml-8 first:ml-0">
          <Avatar
            picture={currentUser.info.picture}
            name={currentUser.info.name}
          />
        </div>
      )}
    </div>
  );
}

export function Avatar({ picture, name }: { picture: string; name: string }) {
  return (
    <div className={classes.avatar} data-tooltip={name}>
      <img
        width={20}
        height={20}
        src={picture}
        className={classes.avatar__picture}
        data-tooltip={name}
        alt="picture"
      />
    </div>
  );
}
