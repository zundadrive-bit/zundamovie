import { useState } from 'react';

function Counter(){
  
  const [count, setCount] = useState(0);

  return (
    <div style={{ 
      textAlign: 'center', 
      padding: '50px', 
      backgroundColor: 'white',   // 背景を白に
      minHeight: '100vh',         // 画面の高さいっぱいに広げる
      color: '#333',              // 白背景に合わせて文字を黒系に
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '30px'
    }}>
      <p style={{ 
        fontSize: '4rem',         // 文字を大きく
        fontWeight: 'bold',
        margin: 0
      }}>
        現在のカウント: {count}
      </p>
      
      <button 
        onClick={() => setCount(count + 1)}
        style={{
          fontSize: '2rem',       // ボタンの文字を大きく
          padding: '20px 40px',   // 余白を広げてボタン自体を大きく
          cursor: 'pointer',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '12px',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          fontWeight: 'bold',
          transition: 'transform 0.1s'
        }}
        onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.95)'}
        onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        カウントアップ
      </button>
    </div>
  );
}

export default Counter;
