import { HorizontalUList } from '@reactresume/components';
import { JSONResumeBasics } from '@reactresume/types/dist/jsonresume-schema';

export interface BasicsProps {
  data: JSONResumeBasics;
}

export const Basics = ({ data }: BasicsProps) => {
  const { name, label, email, phone, url, profiles, location } = data;

  const { city, region, countryCode } = location;
  const profileUrls = profiles
    ? profiles
        .filter((profile) => profile._display !== false)
        .map((profile) => (
          <a href={profile.url} target="_blank">
            {profile.url}
          </a>
        ))
    : [];

  return (
    <>
      <div className="heading">
        <h1>{name}</h1>
        {label && <h2>{label}</h2>}
      </div>
      <HorizontalUList
        items={[
          <a href={`mailto:${email}`}>{email}</a>,
          phone,
          <a href={url} target="_blank">
            {url}
          </a>,
          ...profileUrls,
        ]}
      />
      <br />
      {[city, region, countryCode].filter(Boolean).join(', ')}
    </>
  );
};
