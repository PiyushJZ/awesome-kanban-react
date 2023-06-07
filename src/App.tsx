import { useTranslation } from 'react-i18next';

function App() {
  const { t } = useTranslation();
  return (
    <div className='text-4xl dark:text-white dark:bg-black'>
      Hello {t('WELCOME')}
    </div>
  );
}

export default App;
