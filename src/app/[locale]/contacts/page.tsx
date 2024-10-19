import Contacts from '@/app/[locale]/contacts/components/Contacts';
import Breadcrumb from '@/app/components/Breadcrumb/Breadcrumb';

export default async function Post() {
  return (
    <>
      <Breadcrumb crumbLabel={'contacts'} />
      <Contacts />
    </>
  );
}
