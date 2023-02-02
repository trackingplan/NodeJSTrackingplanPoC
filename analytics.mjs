import { Analytics } from 'analytics';
import segmentPlugin from '@analytics/segment';

const analytics = Analytics({
    app: 'app-name',
    plugins: [
        // ... your analytics integrations
        segmentPlugin({
            writeKey: '123-xyz'
        })
    ]
});

export default analytics;
