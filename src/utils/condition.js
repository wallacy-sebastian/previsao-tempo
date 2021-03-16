export function condition(condition) {
    switch (condition) {
        case 'storm':
            return icon = {
                name: 'rainy-outline',
                color: '#1EC9FF'
            };
            break;
    
        case 'clear_day':
            return icon = {
                name: 'partly-sunny-outline',
                color: '#FFFB300'
            };
            break;
        case 'rain':
            return icon = {
                name: 'rainy-outline',
                color: '#1EC9FF'
            };
            break;
        default:
            return icon = {
                name: 'cloudy-outline',
                color: '#1EC9FF'
            };
            break;
    }
}