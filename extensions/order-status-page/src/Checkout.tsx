import {
  Text,
  Banner,
  reactExtension,
  useSettings,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension('customer-account.order-status.block.render', () => <Extension />);

function Extension() {
  const settings = useSettings();

  const bannerMessage = settings.banner_message;
  const bannerInfo = settings.banner_message_info;

  return (
    <>
      {bannerInfo && (
        <Banner status='info'>
          <Text>
            {bannerInfo}
          </Text>
        </Banner>
      )}
      {bannerMessage && (
        <Banner status='info'>
          <Text>
            {bannerMessage}
          </Text>
        </Banner>
      )}
    </>
  );
}
