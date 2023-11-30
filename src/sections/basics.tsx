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
        .map((profile) => <a href={profile.url}>{profile.url}</a>)
    : [];

  return (
    <>
      <div className="heading">
        <h1>{name}</h1>
        {label && <h2>{label}</h2>}
      </div>
      <HorizontalUList
        items={[email, phone, <a href={url}>{url}</a>, ...profileUrls]}
      />
      <br />
      {city}, {region}, {countryCode}
    </>
  );
};
