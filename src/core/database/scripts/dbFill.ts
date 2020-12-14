import runCliCommand from './runCliCommand';

try {
  runCliCommand('db:seed:all');
} catch (ex) {
  console.error('Exception:', ex);
}
