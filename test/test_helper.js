// we need to let plug-in chai-immutable before any tests are run.
import chai from 'chai';
import chaiImmutable from 'chai-immutable';

chai.use(chaiImmutable);

//then we need to have Mocha require this file before it starts running tests. We handle that in package.json in the script for test.
