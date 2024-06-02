# 3d-flip-switch
A 3d flip-switch component


# demo 
![demo.gif](https://github.com/SirNova01/3d-flip-switch/blob/main/demo.gif)

![sizes.gif](https://github.com/SirNova01/3d-flip-switch/blob/main/sizes.gif)


# simple code
```
const App = () => {
  const handleToggle = (checked) => {
    console.log('Switch is now', checked ? 'On' : 'Off');
  };

  return (
    <div>
      <h1>Switch Component</h1>
      <Switch isDark={true} onToggle={handleToggle} size="20px" />
      <Switch isDark={false} onToggle={handleToggle} size="40px" />
      <Switch isDark={true} onToggle={handleToggle} size="60px" />
    </div>
  );
};

export default App;
```
