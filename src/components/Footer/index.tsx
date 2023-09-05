import { DefaultFooter } from '@ant-design/pro-components';
const Footer: React.FC = () => {
  const defaultMessage = 'React学习项目';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'Moonykun 的博客',
          title: 'Moonykun 的博客',
          href: 'https://www.fullmovon.com.cn/',
          blankTarget: true,
        },
      ]}
    />
  );
};
export default Footer;
